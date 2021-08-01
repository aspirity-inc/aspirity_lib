namespace $ {

	export class $aspirity_lib_plural extends $mol_object2 {

		other() {
			throw new Error(`${ this }.other() is not defined`)
		}
		
		one() {
			throw new Error(`${ this }.one() is not defined`)
		}
		
		two() {
			throw new Error(`${ this }.two() is not defined`)
		}
		
		few() {
			throw new Error(`${ this }.few() is not defined`)
		}
		
		many() {
			throw new Error(`${ this }.many() is not defined`)
		}
		
		@ $mol_mem
		plural_rules() {
			const locale = this.$.$mol_locale.lang()
			return new Intl.PluralRules(locale)
		}
		
		@ $mol_mem
		select( num : number ) {
			const plural = this.plural_rules().select( num )
			return this[ plural ]()
		}

	}

}
