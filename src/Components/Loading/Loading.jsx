
import { trefoil } from 'ldrs'
import 'ldrs/ring'
trefoil.register()
import { ring } from 'ldrs'
ring.register()

const Loading = () => {
    return (
        <div className='flex justify-center items-center mt-60'>
            <l-trefoil
                size="40"
                stroke="4"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="1.4"
                color="black"
            ></l-trefoil>
        </div>
    );
};

export default Loading;