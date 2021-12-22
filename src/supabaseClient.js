import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient(
    'https://szgflkllmuytzhsobblk.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE2MzYyMywiZXhwIjoxOTU1NzM5NjIzfQ.iuTvPI7L2TO8oBf6DjD8hzYidMekoS6Wq8GuzrmA8aQ'
    )
