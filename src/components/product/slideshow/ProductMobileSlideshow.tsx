'use client'

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import './slideshow.css'

interface Props {
    productImages: string[],
    title: string,
    className?:string
}
export const ProductMobileSlideshow = ({ productImages, title, className }: Props) => {

    return (
        <div className={className}>
            <Swiper
            style={{
                width:'100vw',
                height:'500px'
            }}
                pagination={true}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper2"
            >
                {
                    productImages.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`/products/${image}`}
                                width={600}
                                height={500}
                                alt={title}
                                className=' object-fill'
                            />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}
