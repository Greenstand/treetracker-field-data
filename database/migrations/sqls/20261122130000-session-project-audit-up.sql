-- NDM administrative corrections to app-supplied session project allocations.
CREATE TABLE field_data.session_project_event (
 id uuid PRIMARY KEY,
 request_id uuid NOT NULL UNIQUE,
 request_hash varchar(64) NOT NULL,
 session_id uuid NOT NULL REFERENCES field_data.session(id),
 organization_id uuid NOT NULL,
 previous_project_id uuid,
 new_project_id uuid,
 actor_id uuid NOT NULL,
 actor_name text NOT NULL,
 reason text NOT NULL CHECK(length(btrim(reason)) BETWEEN 1 AND 1000),
 created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
 CHECK(previous_project_id IS DISTINCT FROM new_project_id)
);
CREATE INDEX session_project_event_history ON field_data.session_project_event(session_id,created_at DESC);
COMMENT ON TABLE field_data.session_project_event IS 'Admin Panel NDM integration: authenticated actor/reason and previous/new project for session allocation corrections. Initial app actor is not inferred.';
