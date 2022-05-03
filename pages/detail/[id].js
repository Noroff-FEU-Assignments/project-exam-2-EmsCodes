import { HOLIDAZE_BASE_URL, HOTELS } from "../../components/data/api";

function details({ hotels }) {
  console.log(hotels);
  return <div>[id]</div>;
}

export default details;

export async function getStaticPaths() {
  try {
    const response = await fetch(HOLIDAZE_BASE_URL + HOTELS);

    const data = await response.json();

    const result = data.data;

    const paths = result.map((hotel) => ({
      params: { id: hotel.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${HOLIDAZE_BASE_URL}api/hotels/${params.id}?populate=*`;

  let hotels = null;

  try {
    const response = await fetch(url);
    const result = await response.json();
    hotels = result.data;
    console.log(hotels);
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotels },
  };
}
