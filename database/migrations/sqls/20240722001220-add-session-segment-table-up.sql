CREATE TABLE session_segment
(
    id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id uuid NOT NULL REFERENCES session(id),
    starts_at timestamptz NOT NULL DEFAULT now(),
    ends_at timestamptz NOT NULL DEFAULT now(),
    processed_at timestamptz NOT NULL DEFAULT now(),
    convex_hull geometry(Polygon, 4326) NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE raw_capture ADD COLUMN session_segment_id uuid REFERENCES session_segment(id);