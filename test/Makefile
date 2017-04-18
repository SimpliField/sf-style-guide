NODE_MODULES=node_modules/

test: $(addprefix ${NODE_MODULES}, jest babel-jest chai babel-preset-es2015 sinon q) src/
	./${NODE_MODULES}.bin/jest -c jest.config.json
	$(MAKE) clean
	
# Babel sucks
src/:
	rsync -rupE ../src $@

${NODE_MODULES}%:
	npm i --prefix . $(@F)

clean:
	rm -rf ${NODE_MODULES}
	rm -rf src

.PHONY: src/ clean
