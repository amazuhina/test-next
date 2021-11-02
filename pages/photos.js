import Image from 'next/image'

import icon from '../public/active-like.svg'
import {MainLayout} from "../components/main-layout";
import {useEffect, useState} from "react";


export default function Photos () {

    const [photos, setPhotos] = useState([])


    useEffect(()=> {
        fetch('https://pixabay.com/api/?key=24038901-16e96aec3337b1269d72ce18d&q=animal&image_type=photo&pretty=true&per_page=10')
                .then(res => res.json())
                .then(res => {

                    const array = []


                    res.hits.map(i => array.push({
                        id: i.id,
                        previewUrl: i.previewURL
                    }) )

                    setPhotos(array)
                })
                .catch(errorMessage => {
                    console.log(errorMessage.error)
                })
    }, [])


    console.log(photos)

    return (
        <MainLayout title={'Photos'}>
             <h2>Photos page</h2>
            {
                photos.map(i => <img src={i.previewUrl} key={i.id}/>)
            }
            <style jsx>{`
              img {
              width: 150px;
              height: 100px;
              margin: 10px;
              }
            `}</style>

        </MainLayout>
    )
}