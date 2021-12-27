import { createClient } from '@supabase/supabase-js'

const apoorv = {
    'url': 'https://tpgvtkmqfbqgecbnaxre.supabase.co',
    'key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE3Mjg3NSwiZXhwIjoxOTU1NzQ4ODc1fQ.HoLac5XTzIf9uS8s2m-hqEcHvDB9E0zvKYlZ_ELQXNc'
}

const neeraj = {
    'url': 'https://szgflkllmuytzhsobblk.supabase.co',
    'key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE2MzYyMywiZXhwIjoxOTU1NzM5NjIzfQ.iuTvPI7L2TO8oBf6DjD8hzYidMekoS6Wq8GuzrmA8aQ'
}



// Create a single supabase client for interacting with your database 
export const supabase = createClient(apoorv.url, apoorv.key)
