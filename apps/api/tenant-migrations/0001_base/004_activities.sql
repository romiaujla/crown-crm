CREATE TABLE IF NOT EXISTS activities (
  id TEXT PRIMARY KEY,
  deal_id TEXT,
  contact_id TEXT,
  type TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
