const sqlite3 = require('sqlite3'); 
const db = new sqlite3.Database('./database.sqlite'); 

db.run('CREATE TABLE IF NOT EXISTS `Weather` ( ' +
    '`id` INTEGER NOT NULL, ' +
    '`output_scale` TEXT NOT NULL, ' +
    '`output_temperature` INTEGER NOT NULL, ' +
    '`date_of_entry` TEXT NOT NULL, ' +
    'PRIMARY KEY(`id`) )');

db.run('CREATE TABLE IF NOT EXISTS `Calculations` ( ' +
    '`id` INTEGER NOT NULL, ' +
    '`date_of_entry` TEXT NOT NULL, ' +
    '`output_temperature` INTEGER NOT NULL, ' +
    'PRIMARY KEY(`id`) )');