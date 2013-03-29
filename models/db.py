db = DAL('mysql://root:wtfcall911@localhost/factbook')
db.define_table('sdata',
                Field('country_id'),
                Field('country'),
                Field('data','blob'))
