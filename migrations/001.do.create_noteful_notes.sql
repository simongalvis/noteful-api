CREATE TABLE noteful_notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    content TEXT,
    date_published TIMESTAMPTZ DEFAULT now() NOT NULL
    
);