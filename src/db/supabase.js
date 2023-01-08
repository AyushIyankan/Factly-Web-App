import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fyhypjvywkhhukfecqsj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aHlwanZ5d2toaHVrZmVjcXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwNzU2NDksImV4cCI6MTk4ODY1MTY0OX0.OdnSPfIbj7MNgiYwOXLIjrVlGMbKn1W0LouEwbFncxk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
