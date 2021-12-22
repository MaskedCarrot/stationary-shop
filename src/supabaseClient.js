import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient(
    'https://tpgvtkmqfbqgecbnaxre.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE3Mjg3NSwiZXhwIjoxOTU1NzQ4ODc1fQ.HoLac5XTzIf9uS8s2m-hqEcHvDB9E0zvKYlZ_ELQXNc'
    )
