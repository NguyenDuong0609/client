import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import io from 'socket.io-client'

let socket;

export default function Home() {

  const ENDPOINT = 'http://103.81.86.16:5000';

  useEffect(() => {
    
    socket = io(ENDPOINT);

    socket.emit('join');
    return () => {
      cleanup
    };
  }, [ENDPOINT]);
  return (
    <>
      page of layout custom
    </>
  )
}
