const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2a29udGJiYm5ydHdtc2xvbGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyNjIxNjUsImV4cCI6MjA1NDgzODE2NX0.67gzjr9ZtmMe41ObWCAuNeK6KYkmfUs-gcOEzMkgkOg"
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bvkontbbbnrtwmslolad.supabase.co'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase