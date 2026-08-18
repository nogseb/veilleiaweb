CREATE TABLE `analytics_daily` (
	`id` int AUTO_INCREMENT NOT NULL,
	`daily_key` varchar(255) NOT NULL,
	`day` varchar(10) NOT NULL,
	`analytics_event_name` enum('page_view','edition_view','domain_open','domain_analysis_flip','domain_close','source_click','archive_view','archive_edition_open','timeline_view','navigation_click','consent_state') NOT NULL,
	`week` int unsigned,
	`analytics_route` enum('home','archives','timeline','about'),
	`domain_code` varchar(48),
	`source_publisher` varchar(96),
	`target` varchar(48),
	`analytics_referrer_channel` enum('direct','search','social','email','partner','internal','unknown') NOT NULL DEFAULT 'unknown',
	`analytics_collection_mode` enum('aggregate','consented_session') NOT NULL DEFAULT 'aggregate',
	`event_count` int unsigned NOT NULL DEFAULT 0,
	`session_count` int unsigned NOT NULL DEFAULT 0,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `analytics_daily_id` PRIMARY KEY(`id`),
	CONSTRAINT `analytics_daily_daily_key_unique` UNIQUE(`daily_key`)
);
--> statement-breakpoint
CREATE TABLE `analytics_events` (
	`id` int AUTO_INCREMENT NOT NULL,
	`event_id` varchar(36) NOT NULL,
	`analytics_event_name` enum('page_view','edition_view','domain_open','domain_analysis_flip','domain_close','source_click','archive_view','archive_edition_open','timeline_view','navigation_click','consent_state') NOT NULL,
	`analytics_collection_mode` enum('aggregate','consented_session') NOT NULL DEFAULT 'aggregate',
	`occurred_at` timestamp NOT NULL,
	`received_at` timestamp NOT NULL DEFAULT (now()),
	`week` int unsigned,
	`analytics_route` enum('home','archives','timeline','about'),
	`domain_code` varchar(48),
	`source_publisher` varchar(96),
	`target` varchar(48),
	`analytics_referrer_channel` enum('direct','search','social','email','partner','internal','unknown') NOT NULL DEFAULT 'unknown',
	`utm_source` varchar(64),
	`utm_medium` varchar(64),
	`utm_campaign` varchar(96),
	`engagement_ms` int unsigned,
	`session_key_hash` varchar(64),
	CONSTRAINT `analytics_events_id` PRIMARY KEY(`id`),
	CONSTRAINT `analytics_events_event_id_unique` UNIQUE(`event_id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
--> statement-breakpoint
CREATE INDEX `analytics_daily_day_idx` ON `analytics_daily` (`day`);--> statement-breakpoint
CREATE INDEX `analytics_daily_week_idx` ON `analytics_daily` (`week`);--> statement-breakpoint
CREATE INDEX `analytics_events_received_at_idx` ON `analytics_events` (`received_at`);--> statement-breakpoint
CREATE INDEX `analytics_events_week_idx` ON `analytics_events` (`week`);--> statement-breakpoint
CREATE INDEX `analytics_events_event_name_idx` ON `analytics_events` (`analytics_event_name`);