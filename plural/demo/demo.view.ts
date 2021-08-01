namespace $.$$ {

	export class $aspirity_lib_plural_demo extends $.$aspirity_lib_plural_demo {

		switch_lang() {
			const langs = { ru : 'en' , en : 'ru' }
			$mol_locale.lang( langs[ $mol_locale.lang() ] )
		}
		
		@ $mol_mem
		time() {
			return new $mol_time_moment( $mol_state_time.now( 1000 ) )
		}
		
		@ $mol_mem
		hour() {
			const hour = this.time().hour!
			return `${ hour } ${ this.hour_label().select( hour ) }`
		}

		@ $mol_mem
		minute() {
			const minute = this.time().minute!
			return `${ minute } ${ this.minute_label().select( minute ) } `
		}

		@ $mol_mem
		second() {
			const second = Math.round( this.time().second! )
			return `${ second } ${ this.second_label().select( second ) }`
		}

	}

}
