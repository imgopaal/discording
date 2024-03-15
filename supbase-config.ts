import { createClient } from '@supabase/supabase-js'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
