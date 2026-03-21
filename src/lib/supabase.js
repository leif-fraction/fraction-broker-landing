import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ckzmkssgwzoxckanirwh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrem1rc3Nnd3pveGNrYW5pcndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwNTE4NzIsImV4cCI6MjA4OTYyNzg3Mn0.8MmWp85OL2kwxKkBw3eziTxrZPZUAqNssue0XaE_jHw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
