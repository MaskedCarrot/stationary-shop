import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient(
    'https://dabghqlgzwmpdpkzqioz.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA4OTA3MiwiZXhwIjoxOTU1NjY1MDcyfQ.AaBnlcsBFezDV0IzPl8VjC9sn3I5Ohf0Ai06IwqDtm8'
    )
