import styled from "styled-components";
import avatar from '../../imgs/avatar.jpg'
import { menuItems } from "../../utils/MenuItems";
import { signout } from "../../utils/Icons";

function Nav({ active, setActive }) {
    return (
        <NavStyle>
            <div className="user-con">
                <img src={avatar} alt='user avatar' />          {/**No actual login system, only one user */}
                <div className="text">
                    <h1>Welcome Jay</h1>
                    <p>Your Performance</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyle>
    );
}
const NavStyle = styled.nav`
    :root{
        --primary: rgba(34,34,96,.1);
        --primary2: rgba(34,34,96,.6);
    }
    padding: 2rem;
    width: 374px;
    height: 100%;
    background: rgba(525,246,249,0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        img{
            height: 80px;
            width: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #000;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h1{
            color: rgba(34, 34, 96);
        }
        p{
            color: var(--primary2);
        }
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: var(--primary2);
            padding-left: 1rem;
            position: relative;
            i{
                color: var(--primary2);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    .active{
        color: var(--primary) !important;
        i{
            color: var(--primary);
        }
        &::before{
            content: "";
            position: absolute;
            left : 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius:  10px 10px 10px 10px;
        }
    }
`;

export default Nav;