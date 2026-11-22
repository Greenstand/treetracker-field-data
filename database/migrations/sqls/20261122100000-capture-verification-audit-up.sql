-- NDM capture review history. The admin API records its real authenticated actor.
CREATE TABLE field_data.capture_verification (
 id uuid PRIMARY KEY,
 request_id uuid NOT NULL,
 request_hash varchar(64) NOT NULL,
 capture_id uuid NOT NULL REFERENCES field_data.raw_capture(id),
 organization_id uuid NOT NULL,
 reviewer_id uuid NOT NULL,
 decision varchar(16) NOT NULL CHECK (decision IN ('approved','rejected')),
 rejection_reason text,
 annotations jsonb NOT NULL DEFAULT '{}'::jsonb,
 previous_updated_at timestamptz NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(request_id,capture_id),
 CHECK (decision <> 'rejected' OR (rejection_reason IS NOT NULL AND length(btrim(rejection_reason)) > 0))
);
CREATE INDEX capture_verification_capture_history ON field_data.capture_verification(capture_id,created_at DESC);
CREATE INDEX capture_verification_organization_history ON field_data.capture_verification(organization_id,created_at DESC);
