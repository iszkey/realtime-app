import { NextPage } from 'next';
import { useEffect } from 'react';
import useStore from '@/store';
import { supabase } from '@/utils/supabase';
import { Layout } from '@/components/Layout';
import { Auth } from '@/components/Auth';
import { DashBoard } from '@/components/DashBoard';

const Home: NextPage = () => {
    const session = useStore((state) => state.session);
    const setSession = useStore((state) => state.setSession);

    useEffect(() => {
        // セッション情報の取得
        setSession(supabase.auth.session());

        // セッション情報の監視
        supabase.auth.onAuthStateChange((_event, session) => {
            // ログイン・ログアウトでセッション情報が変化する走る処理
            setSession(session);
        });
    }, []);

    return (
        <Layout title="Dashboard">{!session ? <Auth /> : <DashBoard />}</Layout>
    );
};

export default Home;
