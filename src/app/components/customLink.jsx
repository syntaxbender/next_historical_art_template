"use client"

import React from 'react'
import Link from "next/link";
import { setLoaderStatus } from './preloader/preloaderSlice';
import { useDispatch } from 'react-redux';

const CustomLink = ({ onClick = ()=>{}, ...rest }) => {
  const dispatch = useDispatch();
  const handleLoaderStatus = (status) => {
    dispatch(setLoaderStatus(status));
  }
  return (
    <Link {...rest} onClick={(e) => { onClick(e); handleLoaderStatus(false); }}></Link>
  )
}

export default CustomLink