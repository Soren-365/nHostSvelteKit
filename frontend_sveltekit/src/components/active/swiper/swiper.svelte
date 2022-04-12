<Swiper
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={3}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
on:slideChange={() => console.log('slide change')}
on:swiper={(e) => console.log(e.detail[0])}
>
<SwiperSlide><img src="/animals/cat.jpeg" width=200 height=200 alt="some animal"/></SwiperSlide>
<SwiperSlide><img src="/animals/lynx.jpg" width=200 height=200 alt="some animal"/></SwiperSlide>
<SwiperSlide><img src="/animals/owl.jpg" width=200 height=200 alt="some animal"/></SwiperSlide>
<SwiperSlide><img src="/animals/elep.jpg" width=200 height=200 alt="some animal"/></SwiperSlide>
<SwiperSlide><img src="/animals/deer.jpg" width=200 height=200 alt="some animal"/></SwiperSlide>
<SwiperSlide><img src="/animals/somCat.jpg" width=200 height=200 alt="some animal"/></SwiperSlide>
<SwiperSlide><img src="/animals/tiger.jpeg" width=200 height=200 alt="some animal"/></SwiperSlide>
...
</Swiper>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/svelte';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
</script>