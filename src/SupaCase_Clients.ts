import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qbhzijjrjzdynugdiqnl.supabase.co';
const supabaseKey = 'your-anon-public-key-here';  // not service_role key!
export const supabase = createClient(supabaseUrl, supabaseKey);

