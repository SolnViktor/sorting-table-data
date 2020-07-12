import React, {useEffect, useState} from 'react';
import {Loader} from "./loader/Loader";
import {Table} from "./Table/Table";
import './App.css'
import {DataRow} from "./DataRow";
import {SetDataSize} from "./SetDataSize";
import {SearchField} from "./SearchField/SearchFiled";
import {Paginator} from "./Paginator/Paginator";

function App() {

    let [isLoading, setIsLoading] = useState(false)
    let [data, setData] = useState([])
    let [sort, setSort] = useState('asc')
    let [sortField, setSortField] = useState('id')
    let [dataRow, setDataRow] = useState('')
    let [displayData, setDisplayData] = useState([])
    let [sortedData, setSortedData] = useState([])
    let [pagesCount, setPagesCount] = useState([])

    const pageSize = 50

    function pages (data) {
        let pages = []
        if (data.length > pageSize) {
            let pageCount = Math.ceil(data.length / pageSize)
            for (let i = 1; i <= pageCount; ++i) {
                pages.push(i)
            }
        }
        setPagesCount(pages)
    }


    async function fetchData(size = 32) {
        setIsLoading(true)
        const response = await fetch(`http://www.filltext.com/?rows=${size}&id={number|1000}
            &firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}
            &address={addressObject}&description={lorem|32}`)
        const data = await response.json()
        setIsLoading(false)
        const sortedData = mySort(data, 'id', 'asc')
        await setData(sortedData)
        await filterData(sortedData)
        pages(data)
    }

    function filterData(data) {
        let displayedData = []
        for (let i = 0; i < data.length; i += pageSize) {
            displayedData.push(data.slice(i, i + pageSize))
        }
        console.log(displayedData)
        setDisplayData(displayedData)
        setSortedData(displayedData[0])
    }

    useEffect(() => {

        fetchData()
    }, [])


    let mySort = (clonedData, sortField, sortType) => {
        return clonedData.sort((a, b) => {
            if (sortType === 'asc') {
                if (a[sortField] > b[sortField]) return 1
                if (a[sortField] < b[sortField]) return -1
                return 0
            }
            if (sortType === 'desc') {
                if (a[sortField] > b[sortField]) return -1
                if (a[sortField] < b[sortField]) return 1
                return 0
            }
        })
    }


    function onSort(sortField, sortedData) {
        const clonedData = sortedData.concat()
        const sortType = sort === 'asc' ? 'desc' : 'asc'
        const orderedData = mySort(clonedData, sortField, sortType)
        setSort(sortType)
        setSortedData(orderedData)
        setSortField(sortField)
    }

    function showDataRow(dataRow) {
        console.log(dataRow)
        setDataRow(dataRow)
    }

    function changeSize(size) {
        fetchData(size)
    }

    function onPageChangeHandler(pageNumber = 0) {
        setSortedData(displayData[pageNumber])
    }

    function onFilterHandler(searchValue) {
        debugger
        let filteredData = data.filter(item => {
            if ( item.firstName.toLowerCase().includes(searchValue.toLowerCase())
                || item.lastName.toLowerCase().includes(searchValue.toLowerCase())
                    || item.email.toLowerCase().includes(searchValue.toLowerCase()) ) return item
        })
        filterData(filteredData)
        pages(filteredData)
        console.log(searchValue)
    }


    return (

        <div className='app'>
            <div className='container'>
                <SearchField onFilterHandler={onFilterHandler}/>
                <SetDataSize changeSize={changeSize}/>
                <Paginator pages={pagesCount} onPageChangeHandler={onPageChangeHandler}/>
                {isLoading && <Loader/>}
                <Table data={sortedData} onSort={onSort} sortField={sortField} sort={sort} showDataRow={showDataRow}/>
                {dataRow && <DataRow dataRow={dataRow}/>}
            </div>
        </div>
    );
}

export default App;

