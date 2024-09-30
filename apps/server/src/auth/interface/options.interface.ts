import { SupabaseClientOptions } from "@supabase/supabase-js";
import { JwtFromRequestFunction } from "passport-jwt";

export interface SupabaseAuthStrategyOptions<T> {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions: SupabaseClientOptions<T>;
  extractor: JwtFromRequestFunction;
}
