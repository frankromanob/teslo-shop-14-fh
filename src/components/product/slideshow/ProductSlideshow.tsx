'use client'
import { useState } from 'react';

import Image from 'next/image';
import { Swiper as SwiperObject } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import './slideshow.css'

interface Props {
    productImages: string[],
    title: string,
    className: string
}
export const ProductSlideshow = ({ productImages, title, className }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
    return (
        <div className={className} >
            <Swiper
                // style={{
                //     '--swiper-navigation-color': '#fff',
                //     '--swiper-pagination-color': '#fff',
                //   } as React.CSSProperties
                // }
                spaceBetween={10}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {
                    productImages.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`/products/${image}`}
                                width={1024}
                                height={800}
                                alt={title}
                                className='rounded-lg object-fill'
                            />
                        </SwiperSlide>

                    ))
                }
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    productImages.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`/products/${image}`}
                                width={100}
                                height={100}
                                alt={title}
                                className='rounded-lg object-fill'
                            />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}
