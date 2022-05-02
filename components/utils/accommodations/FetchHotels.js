// import React from "react";
// import { HOLIDAZE_BASE_URL, HOTELS } from "../../data/api";
// import Link from "next/link";
// import Heading from "../global/heading/Heading";

// function FetchHotels(props) {
//   console.log(props.hotels);
//   return (
//     <div>YO</div>
//     // <ul>
//     //   {props.hotels.map((hotel) => {
//     //     return (
//     //       <li key={hotel.id}>
//     //         <Link href={`detail/${hotel.id}`}>
//     //           <a>
//     //             <Heading size="3" content="yo" />
//     //           </a>
//     //         </Link>
//     //       </li>
//     //     );
//     //   })}
//     // </ul>
//   );
// }

// export default FetchHotels;

// export async function getStaticProps() {
//   const url = HOLIDAZE_BASE_URL + HOTELS;
//   let hotels = [];

//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result.data);
//     hotels = result.data;
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {
//       hotels: hotels,
//     },
//   };
// }
