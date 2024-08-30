"use client" ;
import Head from 'next/head';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import './globals.css';
import FilterSection from './components/FilterSection';
import DiscoverProducts from './components/DiscoverProducts';

export default function Home() {
    const [isFilterVisible, setFilterVisible] = useState(true);

  const toggleFilterVisibility = () => {
    setFilterVisible(!isFilterVisible);
  };
    return (
        <>
            <Head>
                <title>E-commerce Page</title>
            </Head>
            <Header />
            <FilterSection toggleFilterVisibility={toggleFilterVisibility} />
            <main>
                <DiscoverProducts />
                <ProductGrid isFilterVisible={isFilterVisible} />
            </main>
            <Footer />
        </>
    );
}