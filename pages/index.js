import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import io from 'socket.io-client'

let socket;

export default function Home() {

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    
    socket = io();

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
