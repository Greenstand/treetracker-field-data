CREATE TABLE domain_event_sent_2024 partition of domain_event_sent FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
CREATE TABLE domain_event_sent_2025 partition of domain_event_sent FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
CREATE TABLE domain_event_sent_2026 partition of domain_event_sent FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');
CREATE TABLE domain_event_handled_2024 partition of domain_event_handled FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
CREATE TABLE domain_event_handled_2025 partition of domain_event_handled FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
CREATE TABLE domain_event_handled_2026 partition of domain_event_handled FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');