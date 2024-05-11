import './profilePage.scss'
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat';
import apiRequet from "../../lib/apiRequest.js"
import { useNavigate } from 'react-router-dom';
function ProfilePage() {
    const navigate = useNavigate();

    const handleLogut = async (req, res) => {
        try {
            const res = apiRequet.post("/auth/logout");

            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="profilePage">
            <div className="details">

                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avator:
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        </span>
                        <span>Username: <b>John Doe</b></span>
                        <span>E-mail: <b>john@gmail.com</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}
export default ProfilePage;