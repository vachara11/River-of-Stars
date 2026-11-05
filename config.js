// ไฟล์ config.js
// นำ URL และ ANON KEY จาก Supabase Project Settings > API มาใส่ที่นี่
const SUPABASE_URL = 'https://jqekvonifswdxpycdmyn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Nube_xPbcUzfC3dwEMKSyg_GK8Uemfy';

// ห้ามตั้งชื่อตัวแปรว่า const supabase เด็ดขาด เพื่อป้องกันการชนกับ window.supabase ของ Library หลัก
let sbClient = null;

if (typeof window !== 'undefined' && window.supabase && SUPABASE_URL.startsWith('http') && !SUPABASE_URL.includes('YOUR_PROJECT_ID')) {
    sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}