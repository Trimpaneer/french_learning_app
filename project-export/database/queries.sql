-- ============================================
-- Requêtes SQL utiles
-- French Learning App - Vercel Postgres
-- ============================================

-- ============================================
-- VÉRIFICATION ET MONITORING
-- ============================================

-- Lister toutes les tables
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public'
ORDER BY table_name;

-- Voir la structure d'une table
SELECT column_name, data_type, character_maximum_length, is_nullable
FROM information_schema.columns
WHERE table_name = 'users'
ORDER BY ordinal_position;

-- Voir tous les index
SELECT 
  tablename,
  indexname,
  indexdef
FROM pg_indexes
WHERE schemaname = 'public'
ORDER BY tablename, indexname;

-- Taille de la base de données
SELECT 
  pg_size_pretty(pg_database_size(current_database())) as database_size;

-- Taille de chaque table
SELECT 
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- ============================================
-- STATISTIQUES UTILISATEURS
-- ============================================

-- Nombre total d'utilisateurs
SELECT COUNT(*) as total_users FROM users;

-- Utilisateurs récents (derniers 7 jours)
SELECT COUNT(*) as new_users_last_7_days
FROM users
WHERE created_at > NOW() - INTERVAL '7 days';

-- Liste des utilisateurs avec leur date d'inscription
SELECT id, email, created_at
FROM users
ORDER BY created_at DESC
LIMIT 20;

-- Utilisateurs les plus actifs (par nombre total de completions)
SELECT 
  u.id,
  u.email,
  COUNT(DISTINCT tc.tutorial_id) as tutorials_completed,
  COUNT(DISTINCT ec.exercise_id) as exercises_completed,
  (COUNT(DISTINCT tc.tutorial_id) + COUNT(DISTINCT ec.exercise_id)) as total_completions
FROM users u
LEFT JOIN tutorial_completions tc ON u.id = tc.user_id
LEFT JOIN exercise_completions ec ON u.id = ec.user_id
GROUP BY u.id, u.email
ORDER BY total_completions DESC
LIMIT 10;

-- ============================================
-- STATISTIQUES TUTORIELS
-- ============================================

-- Nombre total de completions de tutoriels
SELECT COUNT(*) as total_tutorial_completions FROM tutorial_completions;

-- Tutoriels les plus populaires
SELECT 
  tutorial_id,
  COUNT(*) as completion_count,
  COUNT(DISTINCT user_id) as unique_users
FROM tutorial_completions
GROUP BY tutorial_id
ORDER BY completion_count DESC;

-- Progression moyenne par utilisateur
SELECT 
  AVG(tutorial_count) as avg_tutorials_per_user
FROM (
  SELECT user_id, COUNT(*) as tutorial_count
  FROM tutorial_completions
  GROUP BY user_id
) as user_tutorials;

-- ============================================
-- STATISTIQUES EXERCICES
-- ============================================

-- Nombre total de completions d'exercices
SELECT COUNT(*) as total_exercise_completions FROM exercise_completions;

-- Exercices les plus populaires
SELECT 
  exercise_id,
  COUNT(*) as completion_count,
  COUNT(DISTINCT user_id) as unique_users
FROM exercise_completions
GROUP BY exercise_id
ORDER BY completion_count DESC;

-- Progression moyenne par utilisateur
SELECT 
  AVG(exercise_count) as avg_exercises_per_user
FROM (
  SELECT user_id, COUNT(*) as exercise_count
  FROM exercise_completions
  GROUP BY user_id
) as user_exercises;

-- ============================================
-- GESTION DES UTILISATEURS
-- ============================================

-- Chercher un utilisateur par email
SELECT id, email, created_at
FROM users
WHERE email = 'test@example.com';

-- Voir la progression d'un utilisateur spécifique
SELECT 
  u.email,
  (SELECT COUNT(*) FROM tutorial_completions WHERE user_id = u.id) as tutorials,
  (SELECT COUNT(*) FROM exercise_completions WHERE user_id = u.id) as exercises
FROM users u
WHERE u.email = 'test@example.com';

-- Supprimer un utilisateur (et toutes ses completions grâce à CASCADE)
-- DELETE FROM users WHERE email = 'test@example.com';

-- Supprimer tous les utilisateurs de test
-- DELETE FROM users WHERE email LIKE '%test%' OR email LIKE '%example%';

-- ============================================
-- GESTION DES COMPLETIONS
-- ============================================

-- Voir les dernières completions de tutoriels
SELECT 
  tc.id,
  u.email,
  tc.tutorial_id,
  tc.completed_at
FROM tutorial_completions tc
JOIN users u ON tc.user_id = u.id
ORDER BY tc.completed_at DESC
LIMIT 20;

-- Voir les dernières completions d'exercices
SELECT 
  ec.id,
  u.email,
  ec.exercise_id,
  ec.completed_at
FROM exercise_completions ec
JOIN users u ON ec.user_id = u.id
ORDER BY ec.completed_at DESC
LIMIT 20;

-- Réinitialiser les completions d'un utilisateur
-- DELETE FROM tutorial_completions WHERE user_id = 1;
-- DELETE FROM exercise_completions WHERE user_id = 1;

-- Réinitialiser TOUTES les completions (ATTENTION !)
-- TRUNCATE tutorial_completions, exercise_completions;

-- ============================================
-- ANALYSE DE DONNÉES
-- ============================================

-- Taux de complétion par tutoriel (si vous avez 3 tutoriels)
WITH total_users AS (
  SELECT COUNT(*) as count FROM users
)
SELECT 
  tutorial_id,
  COUNT(*) as completions,
  ROUND(100.0 * COUNT(*) / (SELECT count FROM total_users), 2) as completion_rate_percent
FROM tutorial_completions
GROUP BY tutorial_id
ORDER BY tutorial_id;

-- Taux de complétion par exercice (si vous avez 2 exercices)
WITH total_users AS (
  SELECT COUNT(*) as count FROM users
)
SELECT 
  exercise_id,
  COUNT(*) as completions,
  ROUND(100.0 * COUNT(*) / (SELECT count FROM total_users), 2) as completion_rate_percent
FROM exercise_completions
GROUP BY exercise_id
ORDER BY exercise_id;

-- Activité par jour (derniers 30 jours)
SELECT 
  DATE(completed_at) as date,
  COUNT(*) as total_completions,
  COUNT(DISTINCT user_id) as active_users
FROM (
  SELECT user_id, completed_at FROM tutorial_completions
  UNION ALL
  SELECT user_id, completed_at FROM exercise_completions
) as all_completions
WHERE completed_at > NOW() - INTERVAL '30 days'
GROUP BY DATE(completed_at)
ORDER BY date DESC;

-- Utilisateurs qui ont tout complété
SELECT 
  u.id,
  u.email,
  COUNT(DISTINCT tc.tutorial_id) as tutorials,
  COUNT(DISTINCT ec.exercise_id) as exercises
FROM users u
LEFT JOIN tutorial_completions tc ON u.id = tc.user_id
LEFT JOIN exercise_completions ec ON u.id = ec.user_id
GROUP BY u.id, u.email
HAVING COUNT(DISTINCT tc.tutorial_id) >= 3 
   AND COUNT(DISTINCT ec.exercise_id) >= 2;

-- ============================================
-- MAINTENANCE
-- ============================================

-- Supprimer les utilisateurs inactifs (sans completions depuis 6 mois)
-- DELETE FROM users 
-- WHERE created_at < NOW() - INTERVAL '6 months'
-- AND id NOT IN (
--   SELECT DISTINCT user_id FROM tutorial_completions WHERE completed_at > NOW() - INTERVAL '6 months'
--   UNION
--   SELECT DISTINCT user_id FROM exercise_completions WHERE completed_at > NOW() - INTERVAL '6 months'
-- );

-- Nettoyer les doublons (normalement impossible grâce à UNIQUE)
-- Vérifier s'il y a des doublons dans tutorial_completions
SELECT user_id, tutorial_id, COUNT(*)
FROM tutorial_completions
GROUP BY user_id, tutorial_id
HAVING COUNT(*) > 1;

-- Vérifier s'il y a des doublons dans exercise_completions
SELECT user_id, exercise_id, COUNT(*)
FROM exercise_completions
GROUP BY user_id, exercise_id
HAVING COUNT(*) > 1;

-- Analyser les performances des requêtes (EXPLAIN)
EXPLAIN ANALYZE
SELECT u.email, COUNT(tc.id)
FROM users u
LEFT JOIN tutorial_completions tc ON u.id = tc.user_id
GROUP BY u.id, u.email;

-- ============================================
-- BACKUP ET EXPORT
-- ============================================

-- Exporter tous les utilisateurs (copier le résultat)
SELECT id, email, created_at, updated_at
FROM users
ORDER BY id;

-- Exporter toutes les completions de tutoriels
SELECT id, user_id, tutorial_id, completed_at
FROM tutorial_completions
ORDER BY id;

-- Exporter toutes les completions d'exercices
SELECT id, user_id, exercise_id, completed_at
FROM exercise_completions
ORDER BY id;
