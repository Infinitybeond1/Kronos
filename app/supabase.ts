import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config()

const supabaseUrl = 'https://tyortbjmtkqyignpvekb.supabase.co'
const supabaseKey = process.env.SUPABASE_API_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)