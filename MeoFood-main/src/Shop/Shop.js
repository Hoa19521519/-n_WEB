import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import { Link } from 'react-router-dom';
import Search from './Component/Search';
import Pagination from './Component/Pagination';
import Products from './Component/Products';
import SortProduct from './Component/SortProduct';

function Shop(props) {

    const [products, setProducts] = useState([])
    const [temp, setTemp] = useState([])

    //state sắp xếp sản phẩm
    const [sort, setSort] = useState('default')

    //Tổng số trang
    const [totalPage, setTotalPage] = useState()

    //trang hiện tại
    const [pagination, setPagination] = useState({
        page: '1',
        count: '9',
        search: '',
        category: 'all'
    })

    //Hàm lấy value từ component SortProduct truyền lên
    const handlerChangeSort = (value) => {
        console.log("Value: ", value)

        setSort(value)
    }


    //Hàm thay đổi state pagination.page
    //Nó sẽ truyền xuống Component con và nhận dữ liệu từ Component con truyền lên
    const handlerChangePage = (value) => {
        console.log("Value: ", value)

        //set lại pagination để gọi chạy làm useEffect gọi lại API pagination
        setPagination({
            page: value,
            count: pagination.count,
            search: pagination.search,
            category: pagination.category
        })
    }

    //Hàm thay đổi state pagination.search
    //-> truyền xuống Component con và nhận dữ liệu từ Component con truyền lên
    const handlerSearch = (value) => {
        console.log("Value: ", value)

        setPagination({
            page: pagination.page,
            count: pagination.count,
            search: value,
            category: pagination.category
        })
    }

    //Hàm thay đổi state pagination.category
    const handlerCategory = (value) => {
        console.log("Value: ", value)

        setPagination({
            page: pagination.page,
            count: pagination.count,
            search: pagination.search,
            category: value
        })
    }

    //Gọi hàm useEffect tìm tổng số sản phẩm để tính tổng số trang Và nó phụ thuộc và state pagination
    useEffect(() => {

        const fetchAllData = async () => {

            let response

            
            

            //Tính tổng số trang = tổng số sản phẩm / số lượng sản phẩm 1 trang
            const totalPage = Math.ceil(parseInt(response.length) / parseInt(pagination.count))
            console.log(totalPage)

            setTotalPage(totalPage)
        }

        fetchAllData()

    }, [pagination])

    //Gọi hàm Pagination
    useEffect(() => {

        const fetchData = async () => {

            const params = {
                page: pagination.page,
                count: pagination.count,
                search: pagination.search,
                category: pagination.category
            }

            const query = queryString.stringify(params)

            const newQuery = '?' + query

       
        }

        fetchData()

    }, [pagination])

    return (
        <div className="container">
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="h2 text-uppercase mb-0">Products</h1>
                        </div>
                        <div className="col-lg-6 text-lg-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                                    <li className="breadcrumb-item active" aria-current="page">Products</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>


            {/* -------------Modal Product----------------- */}
            {
                products && products.map(value => (
                    <div className="modal fade show" id={`product_${value._id}`} key={value._id}>
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <div className="row align-items-stretch">
                                        <div className="col-lg-6 p-lg-0">
                                            <img style={{ width: '100%' }} className="product-view d-block h-100 bg-cover bg-center" src={value.img1} data-lightbox={`product_${value._id}`} />
                                            <img className="d-none" href={value.img2} />
                                            <img className="d-none" href={value.img3} />
                                        </div>
                                        <div className="col-lg-6">
                                            {/* Để tắt modal phải có class="close" và data-dissmiss="modal" và aria-label="Close" */}
                                            <a className="close p-4" type="button" href="#section_product" data-dismiss="modal" aria-label="Close">×</a>
                                            <div className="p-5 my-md-4">
                                                <ul className="list-inline mb-2">
                                                    <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                                                    <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                                                    <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                                                    <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                                                    <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                                                </ul>
                                                <h2 className="h4">{value.name}</h2>
                                                <p className="text-muted">${value.price}</p>                                                
                                                <div className="row align-items-stretch mb-4">
                                                    <div className="col-sm-5 pl-sm-0 fix_addwish">
                                                        <a className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0">
                                                            <i className="far fa-heart mr-2"></i>Add To Wish List</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {/* -------------Modal Product----------------- */}


            <section className="py-5">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-3 order-2 order-lg-1">
                            <h5 className="text-uppercase mb-4">Categories</h5>
                            <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">Dry Food</strong></div>
                            <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                                <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('Freeze-Dried Meat')}>Freeze-Dried Meat</a></li>
                                <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('Grain')}>Grain</a></li>
                            </ul>
                            <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">Wet Food</strong></div>
                            <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                                <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('Pate')}>Pate</a></li>
                                <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('Canned Food')}>Canned Food</a></li>
                            </ul>
                      
                        </div>
                        <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                            <div className="row mb-3 align-items-center">

                                {/* ------------------Search----------------- */}
                                <Search handlerSearch={handlerSearch} />
                                <div className="col-lg-8">
                                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                                        <li className="list-inline-item">
                                            <SortProduct handlerChangeSort={handlerChangeSort} />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Products products={products} sort={sort} />

                            <Pagination pagination={pagination} handlerChangePage={handlerChangePage} totalPage={totalPage} />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Shop;