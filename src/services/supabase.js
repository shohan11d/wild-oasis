import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://zuoujendtbvbgfqlbrat.supabase.co';
const supabaseKey =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1b3VqZW5kdGJ2YmdmcWxicmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0MzEzODYsImV4cCI6MjA0ODAwNzM4Nn0.qxrNBTG5e3yMzcZXUTjphlNvgd0sG5nbsagIPVC7Zgw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
