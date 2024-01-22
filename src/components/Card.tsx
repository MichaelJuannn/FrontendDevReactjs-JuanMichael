import { Restaurant } from "../types"

export default function Card({ restaurant }: { restaurant: Restaurant }) {
    const star = new Map([
        [1, '★'],
        [2, '★★'],
        [3, '★★★'],
        [4, '★★★★'],
        [5, '★★★★★'],
    ])
    return (
        <>
            <div className=" max-w-sm rounded overflow-hidden shadow-lg m-2 bg-white">
                <div className="px-6 py-4">
                    <img src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`} alt="" />
                    <div className="font-bold text-xl mb-2">{restaurant.name}</div>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">rating</p>
                            <p className="text-blue-600 ">
                                {star.get(Math.round(restaurant.rating))}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2 ">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </>
    )
}