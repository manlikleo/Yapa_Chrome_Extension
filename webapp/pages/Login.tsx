import  React, {useEffect,useState} from 'react'
import type { NextPage } from 'next';
import { useRouter} from 'next/router'
import { getSession} from 'next-auth/react'; 
import AuthForm from '@components/AuthForm';


const Login: NextPage = () => {

    const [loading, SetLoading] = useState(true); 
    const router = useRouter();
    const EXE_ID = 'llneclmbomnmhcgbaacmjdloencbfahj'

    useEffect(()=> {
        getSession()
        .then((session) => {
            if(session){
                if(session.user.id !== undefined){
                    // chrome.runtime.sendMessage(EXE_ID, {type:'browser',data:session.user.id}) 
                    router.push('/Dashboard');
                }else{
                    let extensionKey = localStorage.getItem('userkey'); 
                    const auth = sendMessage(extensionKey)
                    if(auth){
                        router.push('/Dashboard');
                    }
                }
            }else{
                SetLoading(false)
            }
        })
    },[router]); 


    const sendMessage = (data:string)=>{
        // chrome.runtime.sendMessage(EXE_ID, {type:'browser',data:data})
        return true; 
    }




    if(loading){
        return <p>Loading Page</p>
    }

    return <AuthForm/>
}

export default Login;