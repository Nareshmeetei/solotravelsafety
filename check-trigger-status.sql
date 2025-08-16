-- Check if trigger exists and its definition
SELECT 
  trigger_name, 
  event_manipulation, 
  event_object_table, 
  action_statement,
  action_timing
FROM information_schema.triggers 
WHERE trigger_name LIKE '%profile%' 
   OR trigger_name LIKE '%user%';

-- Check trigger function exists
SELECT 
  routine_name,
  routine_type,
  routine_definition
FROM information_schema.routines 
WHERE routine_name LIKE '%profile%' 
   OR routine_name LIKE '%user%';

-- Check profiles table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'profiles'
ORDER BY ordinal_position;