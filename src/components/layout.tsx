import {ReactNode, useContext} from "react";
import Link from "next/link";
import UserContext from "@/context/UserContext";
import {func} from "prop-types";
import {useRouter} from "next/router";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {

    // @ts-ignore
    const { user, logout } = useContext(UserContext);
    const router = useRouter();

    function logoutUser() {
        logout();
        router.push("/login");
    }

    function authenticationButtons() {
        if(user === null) {
            return (
                <div>
                    <Link href="/login" className="text-warning px-2 py-2 mx-2 border border-warning rounded-1">Login</Link>
                    <Link href="/register" className="text-warning px-2 py-2 mx-2 border border-warning rounded-1">Register</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link href="/" className="text-warning px-2 py-2 mx-2 border border-warning rounded-1">{ user.name }</Link>
                    <a onClick={logoutUser} href="#" className="text-warning px-2 py-2 mx-2 border border-warning rounded-1">Logout</a>
                </div>
            )
        }
    }

    return (
        <div>
            <header className="mx-5 h-10vh">
                <div className="d-flex flex-row justify-content-between py-3 border-bottom border-dark">
                    <Link href="/" className="d-flex align-items-center">
                        <svg width="140" height="20" viewBox="0 0 180 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.373 15.7676H3.79883L3.76367 12.1465H9.2832C10.2559 12.1465 11.0527 12.0234 11.6738 11.7773C12.2949 11.5195 12.7578 11.1504 13.0625 10.6699C13.3789 10.1777 13.5371 9.58008 13.5371 8.87695C13.5371 8.08008 13.3848 7.43555 13.0801 6.94336C12.7871 6.45117 12.3242 6.09375 11.6914 5.87109C11.0703 5.64844 10.2676 5.53711 9.2832 5.53711H5.62695V27H0.353516V1.40625H9.2832C10.7715 1.40625 12.1016 1.54688 13.2734 1.82812C14.457 2.10938 15.459 2.53711 16.2793 3.11133C17.0996 3.68555 17.7266 4.41211 18.1602 5.29102C18.5938 6.1582 18.8105 7.18945 18.8105 8.38477C18.8105 9.43945 18.5703 10.4121 18.0898 11.3027C17.6211 12.1934 16.877 12.9199 15.8574 13.4824C14.8496 14.0449 13.5312 14.3555 11.9023 14.4141L10.373 15.7676ZM10.1445 27H2.35742L4.41406 22.8867H10.1445C11.0703 22.8867 11.8262 22.7402 12.4121 22.4473C12.998 22.1426 13.4316 21.7324 13.7129 21.2168C13.9941 20.7012 14.1348 20.1094 14.1348 19.4414C14.1348 18.6914 14.0059 18.041 13.748 17.4902C13.502 16.9395 13.1035 16.5176 12.5527 16.2246C12.002 15.9199 11.2754 15.7676 10.373 15.7676H5.29297L5.32812 12.1465H11.6562L12.8691 13.5703C14.4277 13.5469 15.6816 13.8223 16.6309 14.3965C17.5918 14.959 18.2891 15.6914 18.7227 16.5938C19.168 17.4961 19.3906 18.4629 19.3906 19.4941C19.3906 21.1348 19.0332 22.5176 18.3184 23.6426C17.6035 24.7559 16.5547 25.5938 15.1719 26.1562C13.8008 26.7188 12.125 27 10.1445 27ZM28.0918 12.1289V27H23.0293V7.98047H27.793L28.0918 12.1289ZM33.8223 7.85742L33.7344 12.5508C33.4883 12.5156 33.1895 12.4863 32.8379 12.4629C32.498 12.4277 32.1875 12.4102 31.9062 12.4102C31.1914 12.4102 30.5703 12.5039 30.043 12.6914C29.5273 12.8672 29.0938 13.1309 28.7422 13.4824C28.4023 13.834 28.1445 14.2617 27.9688 14.7656C27.8047 15.2695 27.7109 15.8438 27.6875 16.4883L26.668 16.1719C26.668 14.9414 26.791 13.8105 27.0371 12.7793C27.2832 11.7363 27.6406 10.8281 28.1094 10.0547C28.5898 9.28125 29.1758 8.68359 29.8672 8.26172C30.5586 7.83984 31.3496 7.62891 32.2402 7.62891C32.5215 7.62891 32.8086 7.65234 33.1016 7.69922C33.3945 7.73438 33.6348 7.78711 33.8223 7.85742ZM45.8809 22.7109V14.2383C45.8809 13.6289 45.7812 13.1074 45.582 12.6738C45.3828 12.2285 45.0723 11.8828 44.6504 11.6367C44.2402 11.3906 43.707 11.2676 43.0508 11.2676C42.4883 11.2676 42.002 11.3672 41.5918 11.5664C41.1816 11.7539 40.8652 12.0293 40.6426 12.3926C40.4199 12.7441 40.3086 13.1602 40.3086 13.6406H35.2461C35.2461 12.832 35.4336 12.0645 35.8086 11.3379C36.1836 10.6113 36.7285 9.97266 37.4434 9.42188C38.1582 8.85938 39.0078 8.41992 39.9922 8.10352C40.9883 7.78711 42.1016 7.62891 43.332 7.62891C44.8086 7.62891 46.1211 7.875 47.2695 8.36719C48.418 8.85938 49.3203 9.59766 49.9766 10.582C50.6445 11.5664 50.9785 12.7969 50.9785 14.2734V22.4121C50.9785 23.4551 51.043 24.3105 51.1719 24.9785C51.3008 25.6348 51.4883 26.209 51.7344 26.7012V27H46.6191C46.373 26.4844 46.1855 25.8398 46.0566 25.0664C45.9395 24.2812 45.8809 23.4961 45.8809 22.7109ZM46.5488 15.416L46.584 18.2812H43.7539C43.0859 18.2812 42.5059 18.3574 42.0137 18.5098C41.5215 18.6621 41.1172 18.8789 40.8008 19.1602C40.4844 19.4297 40.25 19.7461 40.0977 20.1094C39.957 20.4727 39.8867 20.8711 39.8867 21.3047C39.8867 21.7383 39.9863 22.1309 40.1855 22.4824C40.3848 22.8223 40.6719 23.0918 41.0469 23.291C41.4219 23.4785 41.8613 23.5723 42.3652 23.5723C43.127 23.5723 43.7891 23.4199 44.3516 23.1152C44.9141 22.8105 45.3477 22.4355 45.6523 21.9902C45.9688 21.5449 46.1328 21.123 46.1445 20.7246L47.4805 22.8691C47.293 23.3496 47.0352 23.8477 46.707 24.3633C46.3906 24.8789 45.9863 25.3652 45.4941 25.8223C45.002 26.2676 44.4102 26.6367 43.7188 26.9297C43.0273 27.2109 42.207 27.3516 41.2578 27.3516C40.0508 27.3516 38.9551 27.1113 37.9707 26.6309C36.998 26.1387 36.2246 25.4648 35.6504 24.6094C35.0879 23.7422 34.8066 22.7578 34.8066 21.6562C34.8066 20.6602 34.9941 19.7754 35.3691 19.002C35.7441 18.2285 36.2949 17.5781 37.0215 17.0508C37.7598 16.5117 38.6797 16.1074 39.7812 15.8379C40.8828 15.5566 42.1602 15.416 43.6133 15.416H46.5488ZM60.2246 7.98047V27H55.1445V7.98047H60.2246ZM54.8281 3.02344C54.8281 2.28516 55.0859 1.67578 55.6016 1.19531C56.1172 0.714844 56.8086 0.474609 57.6758 0.474609C58.5312 0.474609 59.2168 0.714844 59.7324 1.19531C60.2598 1.67578 60.5234 2.28516 60.5234 3.02344C60.5234 3.76172 60.2598 4.37109 59.7324 4.85156C59.2168 5.33203 58.5312 5.57227 57.6758 5.57227C56.8086 5.57227 56.1172 5.33203 55.6016 4.85156C55.0859 4.37109 54.8281 3.76172 54.8281 3.02344ZM69.3652 12.041V27H64.3027V7.98047H69.0488L69.3652 12.041ZM68.627 16.8223H67.2559C67.2559 15.416 67.4375 14.1504 67.8008 13.0254C68.1641 11.8887 68.6738 10.9219 69.3301 10.125C69.9863 9.31641 70.7656 8.70117 71.668 8.2793C72.582 7.8457 73.6016 7.62891 74.7266 7.62891C75.6172 7.62891 76.4316 7.75781 77.1699 8.01562C77.9082 8.27344 78.541 8.68359 79.0684 9.24609C79.6074 9.80859 80.0176 10.5527 80.2988 11.4785C80.5918 12.4043 80.7383 13.5352 80.7383 14.8711V27H75.6406V14.8535C75.6406 14.0098 75.5234 13.3535 75.2891 12.8848C75.0547 12.416 74.709 12.0879 74.252 11.9004C73.8066 11.7012 73.2559 11.6016 72.5996 11.6016C71.9199 11.6016 71.3281 11.7363 70.8242 12.0059C70.332 12.2754 69.9219 12.6504 69.5938 13.1309C69.2773 13.5996 69.0371 14.1504 68.873 14.7832C68.709 15.416 68.627 16.0957 68.627 16.8223Z" fill="black"/>
                            <path d="M96.3477 1.40625V27H91.0918V1.40625H96.3477ZM104.223 1.40625V5.53711H83.3398V1.40625H104.223ZM114.014 27.3516C112.537 27.3516 111.213 27.1172 110.041 26.6484C108.869 26.168 107.873 25.5059 107.053 24.6621C106.244 23.8184 105.623 22.8398 105.189 21.7266C104.756 20.6016 104.539 19.4062 104.539 18.1406V17.4375C104.539 15.9961 104.744 14.6777 105.154 13.4824C105.564 12.2871 106.15 11.25 106.912 10.3711C107.686 9.49219 108.623 8.81836 109.725 8.34961C110.826 7.86914 112.068 7.62891 113.451 7.62891C114.799 7.62891 115.994 7.85156 117.037 8.29688C118.08 8.74219 118.953 9.375 119.656 10.1953C120.371 11.0156 120.91 12 121.273 13.1484C121.637 14.2852 121.818 15.5508 121.818 16.9453V19.0547H106.701V15.6797H116.844V15.293C116.844 14.5898 116.715 13.9629 116.457 13.4121C116.211 12.8496 115.836 12.4043 115.332 12.0762C114.828 11.748 114.184 11.584 113.398 11.584C112.73 11.584 112.156 11.7305 111.676 12.0234C111.195 12.3164 110.803 12.7266 110.498 13.2539C110.205 13.7812 109.982 14.4023 109.83 15.1172C109.689 15.8203 109.619 16.5938 109.619 17.4375V18.1406C109.619 18.9023 109.725 19.6055 109.936 20.25C110.158 20.8945 110.469 21.4512 110.867 21.9199C111.277 22.3887 111.77 22.752 112.344 23.0098C112.93 23.2676 113.592 23.3965 114.33 23.3965C115.244 23.3965 116.094 23.2207 116.879 22.8691C117.676 22.5059 118.361 21.9609 118.936 21.2344L121.396 23.9062C120.998 24.4805 120.453 25.0312 119.762 25.5586C119.082 26.0859 118.262 26.5195 117.301 26.8594C116.34 27.1875 115.244 27.3516 114.014 27.3516ZM134.967 22.7109V14.2383C134.967 13.6289 134.867 13.1074 134.668 12.6738C134.469 12.2285 134.158 11.8828 133.736 11.6367C133.326 11.3906 132.793 11.2676 132.137 11.2676C131.574 11.2676 131.088 11.3672 130.678 11.5664C130.268 11.7539 129.951 12.0293 129.729 12.3926C129.506 12.7441 129.395 13.1602 129.395 13.6406H124.332C124.332 12.832 124.52 12.0645 124.895 11.3379C125.27 10.6113 125.814 9.97266 126.529 9.42188C127.244 8.85938 128.094 8.41992 129.078 8.10352C130.074 7.78711 131.188 7.62891 132.418 7.62891C133.895 7.62891 135.207 7.875 136.355 8.36719C137.504 8.85938 138.406 9.59766 139.062 10.582C139.73 11.5664 140.064 12.7969 140.064 14.2734V22.4121C140.064 23.4551 140.129 24.3105 140.258 24.9785C140.387 25.6348 140.574 26.209 140.82 26.7012V27H135.705C135.459 26.4844 135.271 25.8398 135.143 25.0664C135.025 24.2812 134.967 23.4961 134.967 22.7109ZM135.635 15.416L135.67 18.2812H132.84C132.172 18.2812 131.592 18.3574 131.1 18.5098C130.607 18.6621 130.203 18.8789 129.887 19.1602C129.57 19.4297 129.336 19.7461 129.184 20.1094C129.043 20.4727 128.973 20.8711 128.973 21.3047C128.973 21.7383 129.072 22.1309 129.271 22.4824C129.471 22.8223 129.758 23.0918 130.133 23.291C130.508 23.4785 130.947 23.5723 131.451 23.5723C132.213 23.5723 132.875 23.4199 133.438 23.1152C134 22.8105 134.434 22.4355 134.738 21.9902C135.055 21.5449 135.219 21.123 135.23 20.7246L136.566 22.8691C136.379 23.3496 136.121 23.8477 135.793 24.3633C135.477 24.8789 135.072 25.3652 134.58 25.8223C134.088 26.2676 133.496 26.6367 132.805 26.9297C132.113 27.2109 131.293 27.3516 130.344 27.3516C129.137 27.3516 128.041 27.1113 127.057 26.6309C126.084 26.1387 125.311 25.4648 124.736 24.6094C124.174 23.7422 123.893 22.7578 123.893 21.6562C123.893 20.6602 124.08 19.7754 124.455 19.002C124.83 18.2285 125.381 17.5781 126.107 17.0508C126.846 16.5117 127.766 16.1074 128.867 15.8379C129.969 15.5566 131.246 15.416 132.699 15.416H135.635ZM154.25 21.7441C154.25 21.3809 154.145 21.0527 153.934 20.7598C153.723 20.4668 153.33 20.1973 152.756 19.9512C152.193 19.6934 151.379 19.459 150.312 19.248C149.352 19.0371 148.455 18.7734 147.623 18.457C146.803 18.1289 146.088 17.7363 145.479 17.2793C144.881 16.8223 144.412 16.2832 144.072 15.6621C143.732 15.0293 143.562 14.3086 143.562 13.5C143.562 12.7031 143.732 11.9531 144.072 11.25C144.424 10.5469 144.922 9.92578 145.566 9.38672C146.223 8.83594 147.02 8.4082 147.957 8.10352C148.906 7.78711 149.973 7.62891 151.156 7.62891C152.809 7.62891 154.227 7.89258 155.41 8.41992C156.605 8.94727 157.52 9.67383 158.152 10.5996C158.797 11.5137 159.119 12.5566 159.119 13.7285H154.057C154.057 13.2363 153.951 12.7969 153.74 12.4102C153.541 12.0117 153.225 11.7012 152.791 11.4785C152.369 11.2441 151.818 11.127 151.139 11.127C150.576 11.127 150.09 11.2266 149.68 11.4258C149.27 11.6133 148.953 11.8711 148.73 12.1992C148.52 12.5156 148.414 12.8672 148.414 13.2539C148.414 13.5469 148.473 13.8105 148.59 14.0449C148.719 14.2676 148.924 14.4727 149.205 14.6602C149.486 14.8477 149.85 15.0234 150.295 15.1875C150.752 15.3398 151.314 15.4805 151.982 15.6094C153.354 15.8906 154.578 16.2598 155.656 16.7168C156.734 17.1621 157.59 17.7715 158.223 18.5449C158.855 19.3066 159.172 20.3086 159.172 21.5508C159.172 22.3945 158.984 23.168 158.609 23.8711C158.234 24.5742 157.695 25.1895 156.992 25.7168C156.289 26.2324 155.445 26.6367 154.461 26.9297C153.488 27.2109 152.393 27.3516 151.174 27.3516C149.404 27.3516 147.904 27.0352 146.674 26.4023C145.455 25.7695 144.529 24.9668 143.896 23.9941C143.275 23.0098 142.965 22.002 142.965 20.9707H147.764C147.787 21.6621 147.963 22.2188 148.291 22.6406C148.631 23.0625 149.059 23.3672 149.574 23.5547C150.102 23.7422 150.67 23.8359 151.279 23.8359C151.936 23.8359 152.48 23.748 152.914 23.5723C153.348 23.3848 153.676 23.1387 153.898 22.834C154.133 22.5176 154.25 22.1543 154.25 21.7441ZM171.213 27.3516C169.736 27.3516 168.412 27.1172 167.24 26.6484C166.068 26.168 165.072 25.5059 164.252 24.6621C163.443 23.8184 162.822 22.8398 162.389 21.7266C161.955 20.6016 161.738 19.4062 161.738 18.1406V17.4375C161.738 15.9961 161.943 14.6777 162.354 13.4824C162.764 12.2871 163.35 11.25 164.111 10.3711C164.885 9.49219 165.822 8.81836 166.924 8.34961C168.025 7.86914 169.268 7.62891 170.65 7.62891C171.998 7.62891 173.193 7.85156 174.236 8.29688C175.279 8.74219 176.152 9.375 176.855 10.1953C177.57 11.0156 178.109 12 178.473 13.1484C178.836 14.2852 179.018 15.5508 179.018 16.9453V19.0547H163.9V15.6797H174.043V15.293C174.043 14.5898 173.914 13.9629 173.656 13.4121C173.41 12.8496 173.035 12.4043 172.531 12.0762C172.027 11.748 171.383 11.584 170.598 11.584C169.93 11.584 169.355 11.7305 168.875 12.0234C168.395 12.3164 168.002 12.7266 167.697 13.2539C167.404 13.7812 167.182 14.4023 167.029 15.1172C166.889 15.8203 166.818 16.5938 166.818 17.4375V18.1406C166.818 18.9023 166.924 19.6055 167.135 20.25C167.357 20.8945 167.668 21.4512 168.066 21.9199C168.477 22.3887 168.969 22.752 169.543 23.0098C170.129 23.2676 170.791 23.3965 171.529 23.3965C172.443 23.3965 173.293 23.2207 174.078 22.8691C174.875 22.5059 175.561 21.9609 176.135 21.2344L178.596 23.9062C178.197 24.4805 177.652 25.0312 176.961 25.5586C176.281 26.0859 175.461 26.5195 174.5 26.8594C173.539 27.1875 172.443 27.3516 171.213 27.3516Z" fill="#FCC822"/>
                        </svg>
                    </Link>
                    <div className="d-flex flex-row justify-content-end">
                        <Link href="/" className="px-2 py-2 mx-2">Home</Link>
                        <Link href="/quizzes" className="px-2 py-2 mx-2">Quizzes</Link>
                        { authenticationButtons() }
                    </div>
                </div>
            </header>
            <main className="mx-5 h-85vh overflow-auto">{children}</main>
            <footer className="h-5vh bg-warning text-warning">.</footer>
        </div>
    )
}
export default Layout;