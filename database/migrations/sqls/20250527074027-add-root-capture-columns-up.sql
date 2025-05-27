ALTER TABLE raw_capture 
    ADD COLUMN root boolean,
    ADD COLUMN root_check_processed_at timestamptz;