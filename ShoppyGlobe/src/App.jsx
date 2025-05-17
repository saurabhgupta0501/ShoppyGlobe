import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/header/Header';
const ProductList = lazy(() => import('./components/productList/ProductList'));
const ProductDetail = lazy(() => import('./components/productDetail/ProductDetail'));
const Cart = lazy(() => import('./components/cart/Cart'));
const NotFound = lazy(() => import('./components/notFound/NotFound'));



function App() {


  return (

    <>
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <main>
              <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                  <Route path='/' element={<ProductList />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />


                </Routes>

              </Suspense>
            </main>

          </div>
        </Router>

      </Provider>


    </>
  )
}

export default App
