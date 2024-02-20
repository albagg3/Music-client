import './create.css'

import { Link } from 'react-router-dom'

const CreateBtn = () => {
    return (
        <>
            <Link className="link" to="/search">
                <div className='icon-circle'>
                    <i className="fa-solid fa-plus icon"></i>
                    <p className='icon-text'>CREATE</p>

                </div>
            </Link>
        </>
    )
}
export default CreateBtn