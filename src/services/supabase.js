import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://bmihwmjetergtpdmovpq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtaWh3bWpldGVyZ3RwZG1vdnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2MDU5MDksImV4cCI6MjA0MjE4MTkwOX0.EYaabl_9KXheGWdxJ92gufJa-o1HSNFX4ojTv25T9gU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
