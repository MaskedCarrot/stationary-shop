import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient(
    'https://lqbfqccwnpzzzkhkbybt.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzYwMzU1NCwiZXhwIjoxOTUzMTc5NTU0fQ.PCrB8-e_pweZUKAejmXJgSdOjJNSpQDdIGRxju6LTaw'
    )
