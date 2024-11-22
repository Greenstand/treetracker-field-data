ALTER TABLE session_segment
    ALTER COLUMN starts_at SET DEFAULT now (),
    ALTER COLUMN ends_at SET DEFAULT now (),
    ALTER COLUMN processed_at SET DEFAULT now ();