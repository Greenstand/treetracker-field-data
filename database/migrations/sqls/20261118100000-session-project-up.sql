ALTER TABLE field_data.session ADD COLUMN project_id uuid;

CREATE INDEX session_project_id_idx
    ON field_data.session (project_id)
    WHERE project_id IS NOT NULL;
